const Park = require('./Park')

Park.deleteMany({})
  .then(() => {
    Park.create({
      name: "Shaw Dog Park",
      location: "Shaw, Washington, D.C.",
      size: "Medium",
      parking: false,
      bathrooms: false,
      misc: "A good grassy park."
    })
  })