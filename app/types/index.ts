export interface User {
  id: string
  name?: string | null
  email?: string | null
  image?: string | null
  createdAt: Date
  updatedAt: Date
}

export interface Book {
  id: string
  title: string
  author: string
  isbn?: string
  coverImage?: string
  publishedDate?: Date
  description?: string
  createdAt: Date
  updatedAt: Date
}

export interface Poem {
  id: string
  userId: string
  bookId: string
  title: string
  content: string
  isPublic: boolean
  createdAt: Date
  updatedAt: Date
}

export interface ReadingLog {
  id: string
  userId: string
  bookId: string
  poemId?: string
  status: 'reading' | 'completed' | 'dropped'
  startDate?: Date
  finishedDate?: Date
  createdAt: Date
  updatedAt: Date
}