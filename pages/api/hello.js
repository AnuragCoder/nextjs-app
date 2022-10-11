// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  res.status(200).json({ name: 'I am Anurag' });
  res.status(200).json({ name: 'Hello, world!' });
};

// export default(req , res) => {
//   res.status(200).json({name : "I am Anurag"});
// }
