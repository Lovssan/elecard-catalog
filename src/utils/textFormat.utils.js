import { format } from 'date-fns'

export const toSize = size => (size / 1024).toFixed(1) + 'КБ'

export const toDate = date => format(date, 'MM/dd/yyyy')
