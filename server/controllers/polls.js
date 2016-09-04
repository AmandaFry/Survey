var mongoose = require('mongoose');
var Polls = mongoose.model('Polls');

// module.exports = (function(){
// 	//return all the current polls
//   return {
//     index: function(request, response){
//       Poll.find({}, function(err,results){
//         response.json(results)
//       })
//     },
//     //find just one poll based on id
//     show: function(request, response){
//       Poll.findOne({_id:request.params.id}, function(err,results){
//         console.log('show controller server');
//         response.json(results)
//       })
//     },
//     //create a new poll
//     create: function(request, response){
//       var poll = new Poll(request.body)
//       console.log('server poll controller', poll);
//       poll.save(function(err){
//         if(err) response.json(err)
//         else response.json({'status':true})
//       })
//     },
//     //create a vote, incirse the number of votes per poll
//     vote: function(request,response){
//       Poll.findOne({_id:request.params.poll_id}, function(err,result){
//         for (var i = 0; i < result.options.length; i++) {
//           if (result.options[i]._id == request.params.option_id) {
//             option = result.options[i]
//             votes = option.votes +=1
//           }
//         }
//         result.save(function(err){
//           if(err) response.json(err)
//             else response.json(result)
//         })

//       })
//     },
//     //delete a poll by id
//     destroy: function(request, response){
//       Poll.remove({_id:request.params.id}, function(err,poll){
//         if(err) request.json(err)
//         else response.json({'status':true})
//       })
//     }
//   }
// })()

module.exports = {

	show: function(req,res){
        Polls.find({},function(err,data){
            if(err)
                console.log(err);
            else
                res.json(data);
        });
    },

    showOne: function(req,res){
        Polls.findOne({_id:req.params.id},function(err,data){
            if(err)
                console.log(err);
            else
                res.json(data);
        });
    },

    create: function(req,res){
        var poll = new Polls(req.body)
        for(var i=0; i<4; i++)
	        poll.votes.push({option:0});
        poll.save(function(err){
            if(err)
                console.log(err);
            else
                res.redirect('/polls');
        });
    },

    delete: function(req,res){
        Polls.remove({_id:req.params.id},function(err,data){
            if(err)
                console.log(err);
            else
                res.redirect('/polls');
        });
    },

    vote: function(req,res){
        Polls.findOne(
        	{_id:req.params.id},
        	function(err,poll){
            if(err)
                console.log(err);
            else{
            	for(index in poll.votes){
            		if(index==req.body.option){
						poll.votes[index].option++;
            			poll.save(function(err){
            				if(err)
            					console.log(err);
            				else{
            					Polls.findOne({_id:req.params.id},function(err,data){
						            if(err)
						                console.log(err);
						            else
						                res.json(data);
						        });
            				}
            			})
            		}
            	}
            }
        });
    },





}
