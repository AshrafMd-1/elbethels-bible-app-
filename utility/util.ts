import folderPaths from "@/data/path.json";

interface Folder {
  mimeType: string;
  id: string;
  name: string;
  children?: Folder[];
  fileExtension?: string;
  size?: string;
}

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return "Good Morning ☀️";
  } else if (hour >= 12 && hour < 17) {
    return "Good Afternoon 🌤️";
  } else if (hour >= 17 && hour < 21) {
    return "Good Evening 🌆";
  } else {
    return "Good Night 🌙";
  }
};

const folderPathGenerator = (
  folderNames: string[],
): Folder | Folder[] | undefined => {
  if (folderNames.length === 0) {
    return folderPaths;
  }
  let currentChildren = folderPaths.find(
    (f) => f.name === folderNames[0],
  )?.children;
  if (!currentChildren) return undefined;

  for (let i = 1; i < folderNames.length; i++) {
    const name = folderNames[i];
    const found: any = currentChildren.find((f) => f.name === name);
    if (!found) return undefined;

    if (name.includes("mp3")) return found;
    currentChildren = found.children;
    if (!currentChildren) return undefined;
  }

  return currentChildren;
};

export { getGreeting, folderPathGenerator, Folder };
