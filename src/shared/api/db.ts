import { Models } from "appwrite";
import { db } from "../config/app-write.config";

interface AnnouncementDTO extends Models.Document {
  title: string;
  description: string;
  image_url: string;
  is_large_banner: boolean;
  is_small_banner: boolean;
}

export interface Announcement {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  isLargeBanner: boolean;
  isSmallBanner: boolean;
}

const adaptAnnouncementDTO = (dto: AnnouncementDTO): Announcement => {
  return {
    id: String(dto.$id),
    title: dto.title,
    description: dto.description,
    imageUrl: dto.image_url,
    isSmallBanner: dto.is_small_banner,
    isLargeBanner: dto.is_large_banner,
  };
};

export const getAllAnnouncements = async () => {
  try {
    const { documents } = await db.listDocuments<AnnouncementDTO>(
      "678635aa003331b77290",
      "678635b500115e828378",
      []
    );

    if (!documents) {
      throw new Error("Announcements not found");
    }

    return documents.map(adaptAnnouncementDTO);
  } catch (error) {
    throw new Error("Announcements not found");
  }
};
