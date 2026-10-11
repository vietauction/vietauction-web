import "server-only"

import type { User } from "@/types/user.type"

const mojibakePattern = /[ÃÂÄ]/

function repairUtf8Mojibake(value: string) {
  if (!mojibakePattern.test(value)) return value

  const repaired = Buffer.from(value, "latin1").toString("utf8")
  return repaired.includes("\uFFFD") ? value : repaired
}

/**
 * Older account rows can contain UTF-8 bytes decoded once as Latin-1.
 * Correct only recognizable mojibake at the API boundary; valid user input is
 * left unchanged and the database is never mutated during a read.
 */
export function normalizeUserText(user: User): User {
  return {
    ...user,
    firstName: repairUtf8Mojibake(user.firstName),
    lastName: repairUtf8Mojibake(user.lastName),
    fullName: repairUtf8Mojibake(user.fullName),
    email: repairUtf8Mojibake(user.email),
    phone: user.phone ? repairUtf8Mojibake(user.phone) : user.phone,
    address: user.address ? repairUtf8Mojibake(user.address) : user.address,
    city: user.city ? repairUtf8Mojibake(user.city) : user.city,
    district: user.district ? repairUtf8Mojibake(user.district) : user.district,
    ward: user.ward ? repairUtf8Mojibake(user.ward) : user.ward,
    bankAccountName: user.bankAccountName
      ? repairUtf8Mojibake(user.bankAccountName)
      : user.bankAccountName,
    bank: user.bank
      ? { ...user.bank, name: repairUtf8Mojibake(user.bank.name) }
      : user.bank,
  }
}
