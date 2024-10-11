export interface mainPageType {
  title: string;
  description: string;
  question: string;
  infoCard: {
    map(arg0: (item: any, index: any) => void): import('react').ReactNode;
    title: string;
    description: string;
  };
}
