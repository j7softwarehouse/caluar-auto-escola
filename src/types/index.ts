export interface GalleryImage {
  src: string
  alt: string
  objectPosition?: string
}

export interface Review {
  name: string
  comment: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface AdminState {
  promo: {
    active: boolean
    title: string
    text: string
    ctaLabel: string
    ctaLink: string
  }
  numbers: number[]
  faq: Array<FaqItem>
  gallery: GalleryImage[]
}
