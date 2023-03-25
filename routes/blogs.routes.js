module.exports = app => {
    const tutorials = require("../controllers/blogs.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Blog
    router.post("/", tutorials.create);
  
    // Retrieve all Blogs
    router.get("/", tutorials.findAll);
  
    // Retrieve all published Blogs
    router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Blog with id
    router.get("/:id", tutorials.findOne);
  
    // Update a Blog with id
    router.put("/:id", tutorials.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);
  
    // Create a new Tutorial
    router.delete("/", tutorials.deleteAll);
  
    app.use('/api/blogs', router);
  };