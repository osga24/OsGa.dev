"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import projectsData from '@/data/projects.json';
import Footer from '@/components/Footer';
import { Github, Folder, Code, ExternalLink, X, Check, Terminal } from 'lucide-react';
import Navbar from '@/components/Navbar';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const techIcons: Record<string, any> = {
	"Next.js": Code,
	"TailwindCSS": Code,
	"TypeScript": Code,
	"Shell": Code
};

interface Project {
	id: string;
	title: string;
	description: string;
	longDescription: string;
	github: string;
	src: string | null;
	tech: string[];
	features: string[];
	image: string;
}

const Backdrop = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
	<motion.div
		className="fixed inset-0 bg-black/70 z-40 flex items-center justify-center p-4 overflow-y-auto"
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		onClick={onClick}
	>
		{children}
	</motion.div>
);

const getTechIcon = (project: Project) => {
	const mainTech = project.tech[0] || '';

	if (mainTech.includes('Next.js') || mainTech.includes('React')) {
		return <Code size={48} className="text-blue-400" />;
	} else if (mainTech.includes('Python')) {
		return <Code size={48} className="text-yellow-400" />;
	} else if (mainTech.includes('Shell')) {
		return <Terminal size={48} className="text-green-400" />;
	} else if (mainTech.includes('TypeScript')) {
		return <Code size={48} className="text-blue-500" />;
	} else {
		return <Folder size={48} className="text-green-400" />;
	}
};
const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
	return (
		<Backdrop onClick={onClose}>
			<motion.div
				className="bg-gray-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
				onClick={(e) => e.stopPropagation()}
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: 50, opacity: 0 }}
			>
				<div className="sticky top-0 z-10 flex justify-between items-center p-4 bg-gray-900 border-b border-gray-800">
					<h2 className="text-xl md:text-2xl font-bold text-white">{project.title}</h2>
					<button
						onClick={onClose}
						className="text-gray-400 hover:text-white transition-colors"
					>
						<X size={24} />
					</button>
				</div>

				<div className="p-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
						<div>
							<div className="flex flex-wrap gap-2 mb-4">
								{project.tech.map((tech, index) => (
									<span
										key={index}
										className="px-3 py-1 rounded-full bg-gray-800 text-white/90 text-sm"
									>
										{tech}
									</span>
								))}
							</div>

							<p className="text-white/80 mb-6">{project.description}</p>

							<div className="flex flex-wrap gap-3">
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors"
								>
									<Github size={18} className="mr-2" />
									View on GitHub
								</a>

								{project.src && (
									<a
										href={project.src}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-md transition-colors"
									>
										<ExternalLink size={18} className="mr-2" />
										Visit Website
									</a>
								)}
							</div>
						</div>

						<div className="rounded-lg overflow-hidden border border-gray-800">
							{project.image ? (
								<div className="relative aspect-video">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover"
									/>
								</div>
							) : (
									<div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center relative">
										<div className="absolute inset-0 opacity-10">
											<div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-green-400 opacity-40"></div>
											<div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-green-400 opacity-40"></div>
										</div>

										{getTechIcon(project)}

										<div className="mt-3 px-6 py-2 bg-gray-800/80 rounded text-center">
											<span className="text-white font-medium">{project.title}</span>
										</div>
									</div>
								)}
						</div>
					</div>

					<div className="mb-8">
						<h3 className="text-xl font-semibold mb-4 border-b border-gray-800 pb-2">About The Project</h3>
						<p className="text-white/80 leading-relaxed">{project.longDescription}</p>
					</div>

					<div className="mb-8">
						<h3 className="text-xl font-semibold mb-4 border-b border-gray-800 pb-2">Features</h3>
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
							{project.features.map((feature, index) => (
								<li key={index} className="flex items-start">
									<Check size={18} className="text-green-400 mr-2 mt-1 flex-shrink-0" />
									<span className="text-white/80">{feature}</span>
								</li>
							))}
						</ul>
					</div>

				</div>
			</motion.div>
		</Backdrop>
	);
};

export default function ProjectsPage() {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	const filteredProjects = selectedCategory
		? projectsData.filter((project: Project) => project.tech.includes(selectedCategory))
		: projectsData;

	const allTechnologies = Array.from(
		new Set(projectsData.flatMap((project: Project) => project.tech))
	);

	return (
		<div>
			<Navbar/>
			<main className="min-h-screen text-white">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					className="max-w-6xl mx-auto px-4 md:px-10 py-8 md:py-12 mt-10 md:mt-8"
				>
					<motion.div
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5 }}
						className="mb-8"
					>
						<h1 className="text-3xl md:text-5xl font-bold mb-4">Projects</h1>
						<p className="text-white/80 mb-6">
							A collection of my projects .
							Click on any project to see more details.
						</p>

						<div className="flex flex-wrap gap-2 mb-8">
							<button
								onClick={() => setSelectedCategory(null)}
								className={`px-3 py-1 rounded-full text-sm ${
selectedCategory === null
? 'bg-green-500 text-white'
: 'bg-gray-700 text-white/80 hover:bg-gray-600'
} transition-colors`}
							>
								All
							</button>
							{allTechnologies.map((tech) => (
								<button
									key={tech}
									onClick={() => setSelectedCategory(tech === selectedCategory ? null : tech)}
									className={`px-3 py-1 rounded-full text-sm flex items-center gap-2 ${
tech === selectedCategory
? 'bg-green-500 text-white'
: 'bg-gray-700 text-white/80 hover:bg-gray-600'
} transition-colors`}
								>
									{tech}
								</button>
							))}
						</div>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{filteredProjects.map((project: Project, index: number) => (
							<motion.div
								key={project.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<div
									className="group h-full rounded-lg overflow-hidden border border-gray-700 hover:border-green-300 transition-all bg-gray-800/50 flex flex-col cursor-pointer"
									onClick={() => setSelectedProject(project)}
								>
									<div className="aspect-video relative bg-gray-900">
										{project.image ? (
											<Image
												src={project.image}
												alt={project.title}
												fill
												className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
											/>
										) : (
												<div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
													<Folder size={48} className="text-green-400 mb-2 opacity-80" />
													<div className="px-6 py-2 bg-gray-800/60 rounded-md">
														<span className="text-white/80 font-medium">{project.title}</span>
													</div>
													<div className="absolute inset-0 bg-green-500/5 opacity-60"></div>
												</div>
											)}
									</div>

									<div className="p-5 flex flex-col flex-grow">
										<div className="flex justify-between items-start mb-2">
											<h3 className="font-semibold text-lg text-white group-hover:text-green-300 transition-colors">
												{project.title}
											</h3>
											<div className="flex items-center gap-2">
												{project.src && (
													<a
														href={project.src}
														target="_blank"
														rel="noopener noreferrer"
														className="text-white/70 hover:text-green-400 transition-colors"
														onClick={(e) => e.stopPropagation()}
													>
														<ExternalLink size={16} />
													</a>
												)}
												<a
													href={project.github}
													target="_blank"
													rel="noopener noreferrer"
													className="text-white/70 hover:text-gray-300 transition-colors"
													onClick={(e) => e.stopPropagation()}
												>
													<Github size={18} />
												</a>
											</div>
										</div>

										<p className="text-sm text-white/70 mb-4 line-clamp-2">
											{project.description}
										</p>

										<div className="flex flex-wrap gap-2 mt-auto">
											{project.tech.map((tech, techIndex) => {
												const TechIcon = techIcons[tech] || Code;
												return (
													<span
														key={techIndex}
														className="px-2 py-1 text-xs rounded-full bg-gray-700 text-white/90 flex items-center gap-1"
													>
														<TechIcon size={12} />
														{tech}
													</span>
												);
											})}
										</div>

										<div className="mt-4 pt-2 border-t border-gray-700 flex justify-between items-center">
											<span className="text-xs text-white/50">View Details</span>
											<ExternalLink size={14} className="text-white/50 group-hover:text-green-300 transition-colors" />
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				<AnimatePresence>
					{selectedProject && (
						<ProjectModal
							project={selectedProject}
							onClose={() => setSelectedProject(null)}
						/>
					)}
				</AnimatePresence>

				<Footer />
			</main>
		</div>
	);
}
