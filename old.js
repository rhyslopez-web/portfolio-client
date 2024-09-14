<main ref={containerRef} className="h-[300vh] bg-red-500 flex flex-col lg:rounded-tl-lg lg:rounded-tr-3xl lg:rounded-br-lg lg:rounded-bl-3xl">
<FirstProjectImage 
src={project.attributes.Thumbnail2.data.attributes.formats.large.url} 
scrollYProgress={scrollYProgress} />

<SecondProjectImage 
src={project.attributes.Thumbnail.data.attributes.formats.large.url} 
scrollYProgress={scrollYProgress} />

<ThirdProjectImage 
src={project.attributes.Thumbnail3.data.attributes.formats.large.url} 
scrollYProgress={scrollYProgress} />
</main>

