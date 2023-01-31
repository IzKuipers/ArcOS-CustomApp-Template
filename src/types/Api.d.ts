interface Cred {
  username: string;
  password: string;
}

type Params = { [key: string]: string };

interface ApiError {
  title: string;
  message: string;
}

interface UserDirectory {
  name: string;
  scopedPath: string;
  files: UserFile[];
  directories: PartialUserDir[];
}

interface PartialUserDir {
  name: string;
  scopedPath: string;
}

interface UserFile {
  size: number;
  mime: string;
  filename: string;
  scopedPath: string;
}

interface DirReadResponse {
  valid: boolean;
  data: UserDirectory;
  error?: ApiError;
}

type DirectoryGet = Promise<UserDirectory | false>;
interface DefaultResponse {
  valid: boolean;
  data: any;
  error?: {
    title: string;
    message: string;
  };
}

interface UserFileLoader {
  name: string;
  description: string;
  icon: string;
  loader: (file: ArcFile) => void;
  extensions: string[];
}

type ApiResponse = Promise<DefaultResponse>;
