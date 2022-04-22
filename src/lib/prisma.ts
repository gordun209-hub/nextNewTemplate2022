/* eslint-disable no-var */
import { PrismaClient } from '@prisma/client'

declare global {
	// allow global `var` declarations

	// eslint-di sable-next-line no-var

	var prisma: PrismaClient | undefined
}

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient()
} else {
	if (!global.prisma) {
		global.prisma = new PrismaClient()
	}
	prisma = global.prisma
}
export default prisma
