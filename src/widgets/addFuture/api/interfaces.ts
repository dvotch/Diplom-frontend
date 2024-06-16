export interface ISpecialization {
  id: string;
  name: string;
  description: string;
}

export interface IPostFuture {
  name: string;
  cost: number;
  description: string | null;
  phone: string | null;
  logo: Blob | FileList | null;
  place: string;
  specializationId: string;
  url: string;
  work: boolean;
}
