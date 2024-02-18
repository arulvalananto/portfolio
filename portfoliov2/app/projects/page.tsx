import type { Metadata } from "next";

import Navbar from "../ui/navbar";

export const metadata: Metadata = {
  title: "Projects - Arul Valan Anto",
  description: "Projects of Arul Valan Anto, a software engineer.",
};

const ProjectsPage = () => (
  <main>
    <Navbar />
  </main>
);

export default ProjectsPage;
