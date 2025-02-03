// partial<T>
// -><

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "제목",
  content: "초안",
};

type Required<T> = {
  [key in keyof T]-?: T[key];
};

const withThumbnailPost: Required<Post> = {
  title: "김명원",
  tags: ["ts"],
  content: "",
  thumbnailURL: "",
};


type Readonly<T> = {
    readonly[key in keyof T]: T[key]
}
const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글",
  tags: [],
  content: "",
};

// readonlyPost.title = ''