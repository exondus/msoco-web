import { gql } from '@apollo/client';

export const MEDIA_FRAGMENT = gql`
  fragment MediaFields on MediaItem {
    sourceUrl
    altText
    mediaDetails {
      width
      height
    }
  }
`;

export const GET_WEDDING_GALLERY = gql`
  query GetWeddingGallery {
    posts(where: { categoryName: "weddings" }, first: 100) {
      nodes {
        id
        title
        slug
        featuredImage {
          node {
            ...MediaFields
          }
        }
        weddingMetadata {
          ceremonyType
          location
        }
      }
    }
  }
  ${MEDIA_FRAGMENT}
`;

export const GET_CORPORATE_SERVICES = gql`
  query GetCorporateServices {
    posts(where: { categoryName: "corporate" }) {
      nodes {
        id
        title
        content
        featuredImage {
          node {
            ...MediaFields
          }
        }
        corporateMetadata {
          serviceType
          technicalSpecs
        }
      }
    }
  }
  ${MEDIA_FRAGMENT}
`;

export const GET_WEDDING_PORTFOLIO = gql`
  query GetWeddingPortfolio {
    posts(where: { categoryName: "weddings" }, first: 50) {
      nodes {
        id
        title
        slug
        featuredImage {
          node {
            ...MediaFields
          }
        }
        weddingMetadata {
          ceremonyType
          location
        }
      }
    }
  }
  ${MEDIA_FRAGMENT}
`;

export const GET_CORPORATE_TESTIMONIALS = gql`
  query GetCorporateTestimonials {
    posts(where: { categoryName: "testimonials" }, first: 10) {
      nodes {
        id
        title
        corporateTestimonialMeta {
          clientName
          clientTitle
          clientCompany
          quote
          metricSummary
        }
      }
    }
  }
`;

export const GET_ABOUT_CONTENT = gql`
  query GetAboutContent {
    page(id: "about", idType: URI) {
      id
      aboutMeta {
        founderName
        founderBio
        eventsCount
        whiteWeddingsCount
        zuluCeremoniesCount
        yearsInKZN
      }
      featuredImage {
        node {
          ...MediaFields
        }
      }
    }
  }
  ${MEDIA_FRAGMENT}
`;

export const GET_SALE_DISCOUNT = gql`
  query GetSaleDiscount {
    posts(where: { search: "SALE" }, first: 1) {
      nodes {
        id
        title
        content
      }
    }
  }
`;
