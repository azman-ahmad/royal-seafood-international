export type ContactDetails = {
  companyName: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  officeHours: string;
  addressTitle: string;
  socialMedia: {
    facebook: string;
  };
};

export const companyDetails: ContactDetails = {
  companyName: "Royal Sea Food International",
  tagline: "Premium Ocean Harvests. Trusted Worldwide.",
  email: "info@royalseafoodint.com",
  description:
    "Royal Seafood International is a seafood consulting firm that facilitates the buying process of seafood from Bangladesh, India, and Vietnam. Since 2019, we have been working as a foreign buyer’s local agent, sourcing the best quality seafood for importers, wholesalers, and supermarkets all over the globe. Our practice is overseen by a team of highly specialized professionals who ensure the delivery of high-quality products on time and at volume-discount prices.",
  phone: "+8801927670156",
  addressTitle: "Khulna, Bangladesh",
  address: "Khan Tower, M A Majid Soroni, Khulna, Bangladesh",
  country: "Bangladesh",
  officeHours: "Sunday - Thursday",
  socialMedia: {
    facebook: "https://www.facebook.com/profile.php?id=61580200603087",
  },
};
