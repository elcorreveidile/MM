import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'demo',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  stega: {
    enabled: process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview',
    studioUrl: '/studio',
  },
})

export async function getBiography() {
  return await client.fetch(`*[_type == "biography"][0]`)
}

export async function getTimeline() {
  return await client.fetch(`*[_type == "event"] | order(date asc)`)
}

export async function getDocuments() {
  return await client.fetch(`*[_type == "document"] | order(date desc)`)
}

export async function getGalleryItems() {
  return await client.fetch(`*[_type == "galleryItem"] | order(order asc)`)
}

export async function getDisciplines() {
  return await client.fetch(`*[_type == "discipline"] | order(title asc)`)
}

export async function getExhibitionInfo() {
  return await client.fetch(`*[_type == "exhibition"][0]`)
}
