import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold nb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

                        <p className="text-muted-foreground text-justify">
                            I'm a dedicated web developer with a passion for creating beautiful and functional websites. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive and user-friendly web applications.
                        </p>

                        <p className="text-muted-foreground text-justify">
                            My journey in web development started with a curiosity for how websites are built, and over the years, I've honed my skills through continuous learning and hands-on experience. I enjoy tackling complex problems and turning ideas into reality through code.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Get in Touch</a>
                            <a 
                            href="" 
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Front-End Development</h4>
                                    <p className="text-sm text-muted-foreground">Creating responsive and interactive user interfaces using modern frameworks.</p>
                                </div>
                            </div>
                        </div>

                         <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-sm text-muted-foreground">Creating user-centered designs through research and prototyping.</p>
                                </div>
                                
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-sm text-muted-foreground">Overseeing projects from conception to completion, ensuring they meet client requirements.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>



            </div>
        </section>
    );
}
