/**
 * CategoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: function (req, res) {
        let data;
          // to convert category name's first letter capital
        data = { companyname: req.body.companyname, email:req.body.email, jobtitle:req.body.jobtitle, experience:req.body.experience,url:req.body.url}
        Category.create(data).fetch().exec(function (err, category) {
          if (err) {
            return (err);
          }
          else{
            var val = Math.floor(1000 + Math.random() * 9000);
            Mailer.sendWelcomeMail(req.body,val);
            console.log(val);
          }
        })
       },


       show: function (req, res) {
        Category.find().exec(function (err, category) {
          return res.json(category);
        });
      },

      edit: function (req, res) {
        let query;
        let data;
        query = { "id": req.param('categoryId') }
        // to convert category to first letter capital, rest of them are small letters
        data = { name: req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1) }
        Category.update(query,data).fetch().exec(function (err, category) {
          categoryName = data.name;
          return res.json(category)
        })
      },

      delete: function (req, res) {
        let query;
        query = { "id": req.param('categoryId') }
        Category.destroy(query).fetch().exec(function (err, category) {
          if (err) return(err);
          return res.json(category)
        })
      },
      
};
