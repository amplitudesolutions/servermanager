var Cluster = require('./models/cluster.js');
var Host = require('./models/host.js');

module.exports = function(router) {
    
    
    router.route('/clusters')
        .get(function(req, res) {
            Cluster.find(function(err, clusters) {
                if (err)
                    res.send(err);
                
                res.json(clusters);
            });
        })
        
        .post(function(req, res) {
            var newCluster = new Cluster();
            newCluster.name = req.body.name;
            newCluster.description = req.body.description;
            newCluster.IPaddress = req.body.ipaddress;
            newCluster.save(function(err) {
                if (err)
                    res.send(err);
                    
                res.status(201).json({message: 'Cluster Added'});
            })
        })
    ;
    
    router.route('/hosts')
        .get(function(req,res) {
            Host.find(function(err, hosts) {
                if (err)
                    res.send(err);
                    
                res.json(hosts);
            
            });
        })
        
        .post(function(req, res) {
            var newHost = new Host();
            newHost.name = req.body.name;
            newHost.IPAddress = req.body.ipaddress;
            newHost.description = req.body.description;
            
            newHost.save(function(err) {
                if (err)
                    res.send(err);
                    
                res.status(201).json({message: 'Host Added'});
            });
        })
    ;
    
    //Add Host to Cluster
    router.route('/hosts/:id/clusters/:clusterid')
        .put(function(req, res) {
            // Cluster.findById(req.params.clusterid, function(err, cluster) {
                 
            // });
        
            Host.findById(req.params.id, function(err, host) {
            host.cluster = req.params.clusterid;
            host.save(function(err) {
                    if (err)
                        res.send(err)
                    
                    res.status(200).json({message: "Host Updated"});
                });
            });
        
        })
        
    ;
  
    router.route('/')
        .get(function(req, res) {
            Host
            .find({})
            .populate('cluster')
            .exec(function(err, clusters) {
                if (err)
                    res.send(err);
                    
                res.json(clusters);
            });    
        })
    
        .post(function(req, res) {
            // Temporary to load data into DB.
            var cluster = new Cluster();
            
            cluster.name = "Test Cluster 3";
            cluster.IPAddress = "192.168.50.10";
            cluster.Description = "Test Loading Cluster Data.";
            
            cluster.save(function(err) {
                if (err)
                    res.send(err);
                    
                // // Add Server
                // var host = new Host();
                // host.name = "HYP01";
                // host.cluster = cluster._id;
                // host.IPAddress = "192.168.1.250";
                // host.description = "hyper-v host 01";
                // host.save(function(err) {
                //     if (err)
                //         res.send(err);
                    
                // });
                    
                res.json({message: "Added"});
            });
        })
        
        .delete(function(req, res) {
            Cluster.remove({}, function(err, cluster) {
                if (err)
                    res.send(err);
                    
                
                Host.remove({}, function(err, host) {
                    
                });
                    
                res.json({message: 'Cluster Removed'});
            });
        })
    
    ;

    
};