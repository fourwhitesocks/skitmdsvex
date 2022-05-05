// reference: https://githubmemory.com/repo/pngwn/MDsveX/issues/294

const modules = import.meta.globEager("../../content/faqs/*.md");


  
export const faqs = Object.entries(modules).map(([path, module]) => {
console.log(module.default)
  const { html } = module.default.render();
  return {
    html,
    ...module.metadata,
  };

 
});
 

//old code before discord Mark H helped me
/* 

const modules = import.meta.globEager("../../content/faqs/*.md");
  
  export const faqs = Object.entries(modules).map(([path, module]) => {
    const { metadata } = module;
    const { html } = module.default.render();
    return {
      html,
      ...metadata,
    };

   
  });




*/

