export interface Upload {
  folderid: number;
  foldername: string;
  id: number;
  description: string;
  uploadname: string;
  uploaddate: string;
  status?: string;
  comment?: string;
  mainLicenses?: string[];
  assignedTo?: string;
  hash: {
    sha1: string;
    md5: string;
    sha256: string;
    size: number;
  }
}
