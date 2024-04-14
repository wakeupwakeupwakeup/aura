import { z } from 'zod'

export const UserFormDtoSchema = z
    .object({
        name: z.string().min(2).max(50),
        email: z.string().email(),
        phone: z.string().regex(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)
    })