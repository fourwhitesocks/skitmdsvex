// reference: https://githubmemory.com/repo/pngwn/MDsveX/issues/294

//some sort of export here for the Faq?


  const modules = import.meta.globEager("../../content/faqs/*.md");
  
  export const faqs = Object.entries(modules).map(([ module]) => {
    const { metadata } = module;
    const { html } = module.default.render();
    return {
      html,
      ...metadata,
    };

   
  });

 

