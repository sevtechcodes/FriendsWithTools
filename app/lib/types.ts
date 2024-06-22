export type User = {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  profilePicture: string;
};

export type ToolCard = {
  _id: string;
  name: string;
  description: string;
  location: string;
  dailyRate: number;
  weeklyRate: number;
  monthlyRate: number;
  picture: string;
};

export type ToolsReviews = {
  _id: string;
  author: User;
  content: string;
  createdAt: Date;
};

export type Conversation = {
  _id: string;
  // toolId: string
  sender: User;
  message: Message[];
};

export type Message = {
  _id: string;
  authorId: string;
  content: string;
  createdAt: Date;
};
