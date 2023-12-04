import Button from "./Button";

function ProjectSidebar({ projects, onStartAddProject }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bolt uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>
                    + Add Project
                </Button>
            </div>
            <ul className="mt-8">
                {projects.map((project) => (
                    <li key={project.id} className="mt-8">
                        <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
                            {project.title}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default ProjectSidebar;