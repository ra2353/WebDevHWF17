var iteration=0
var iteration2=0

$(document).ready(function(){



    $("button[class='ideacreate btn btn-primary']").click(function() {


        var ideaprompt=prompt("What is your idea?");
        var itemselect="#item"
        var item=(itemselect+iteration)

        if (ideaprompt!=null ) {  

            $(item).html(ideaprompt)
        } else {
            $(item).remove()
        }

        iteration++;


    })

    $("button[class='taskcreate btn btn-primary']").click(function() {

        var taskprompt=prompt("What is your task?");
        var taskselect="#button"
        var task=(taskselect+iteration2)
        var button="button"+iteration2
        if (taskprompt!=null ) {  
            $(task).html("" +
               taskprompt+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" +
                "<button type="+task+" class='btn btn-default' data-toggle='modal' data-target='#myModal'><span class='glyphicon glyphicon-pencil'></span></button>")
            $(task).css("z-index","1")
        } else {
                $(task).remove()
        }

;
        iteration2++;

    })



    jsPlumb.ready(function() {

        console.log("jsPlumb loaded")

        /* Connect main box to classes */

       jsPlumb.connect({source:"Mainbox", target:"mainclass1",  paintStyle:{outlineStroke:"black", outlineWidth:2,} ,anchor:"AutoDefault", endpoint:["Dot", { radius:4 }],connector:["Flowchart"],endpointStyle:{ fill:"#EFEFEF"}});
        jsPlumb.connect({source:"Mainbox", target:"mainclass2", paintStyle:{outlineStroke:"black", outlineWidth:2 }, anchor:"AutoDefault", endpoint:["Dot", { radius:4 }],connector:["Flowchart"],endpointStyle:{ fill:"#EFEFEF"}});
        jsPlumb.connect({source:"Mainbox", target:"mainclass3", paintStyle:{outlineStroke:"black", outlineWidth:2 }, anchor:"AutoDefault", endpoint:["Dot", { radius:4 }],connector:["Flowchart"],endpointStyle:{ fill:"#EFEFEF"}});
        jsPlumb.connect({source:"Mainbox", target:"mainclass4", paintStyle:{outlineStroke:"black", outlineWidth:2 }, anchor:"AutoDefault", endpoint:["Dot", { radius:4 }],connector:["Flowchart"],endpointStyle:{ fill:"#EFEFEF"}});
        jsPlumb.connect({source:"Mainbox", target:"mainclass5", paintStyle:{outlineStroke:"black", outlineWidth:2 }, anchor:"AutoDefault", endpoint:["Dot", { radius:4 }],connector:["Flowchart"],endpointStyle:{fill:"#EFEFEF"}});


        var endpointOptions = { isSource:true,  paintStyle:{ fill:"black", } , endpoint:["Dot", { radius:4 }], maxConnections:-1,createEndpoint:true,connector:["Flowchart"] };
        var endpoint = jsPlumb.addEndpoint('mainclass1', endpointOptions);    
        var endpoint = jsPlumb.addEndpoint('mainclass2', endpointOptions);
        var endpoint = jsPlumb.addEndpoint('mainclass3', endpointOptions);
        var endpoint = jsPlumb.addEndpoint('mainclass4', endpointOptions);
        var endpoint = jsPlumb.addEndpoint('mainclass5', endpointOptions);

        var secondendpointOptions= { isSource:true,  paintStyle:{ fill:"#EFEFEF", } , endpoint:["Dot", { radius:4 }], anchor:"Bottom", maxConnections:-1,createEndpoint:true,connector:["Flowchart"]  };
        var endpoint = jsPlumb.addEndpoint('item0', secondendpointOptions);
        var endpoint = jsPlumb.addEndpoint('item1', secondendpointOptions);    
        var endpoint = jsPlumb.addEndpoint('item2', secondendpointOptions);    
        var endpoint = jsPlumb.addEndpoint('item3', secondendpointOptions);    
        var endpoint = jsPlumb.addEndpoint('item4', secondendpointOptions);    
        var endpoint = jsPlumb.addEndpoint('item5', secondendpointOptions);    
        var endpoint = jsPlumb.addEndpoint('item6', secondendpointOptions);    
        var endpoint = jsPlumb.addEndpoint('item7', secondendpointOptions);    
        var endpoint = jsPlumb.addEndpoint('item8', secondendpointOptions);    
        var endpoint = jsPlumb.addEndpoint('item9', secondendpointOptions);
        var endpoint = jsPlumb.addEndpoint('item10', secondendpointOptions);        

        var thirdpoint= { isSource:true,   paintStyle:{ fill:"black", } , endpoint:["Dot", { radius:4 }], anchor:"Bottom", maxConnections:-1,createEndpoint:true,connector:["Flowchart"]    };
        var endpoint = jsPlumb.addEndpoint('button0', thirdpoint);
        var endpoint = jsPlumb.addEndpoint('button1', thirdpoint);    
        var endpoint = jsPlumb.addEndpoint('button2', thirdpoint);    
        var endpoint = jsPlumb.addEndpoint('button3', thirdpoint);    
        var endpoint = jsPlumb.addEndpoint('button4', thirdpoint);    
        var endpoint = jsPlumb.addEndpoint('button5', thirdpoint);    
        var endpoint = jsPlumb.addEndpoint('button6', thirdpoint);    
        var endpoint = jsPlumb.addEndpoint('button7', thirdpoint);    
        var endpoint = jsPlumb.addEndpoint('button8', thirdpoint);    
        var endpoint = jsPlumb.addEndpoint('button9', thirdpoint);
        var endpoint = jsPlumb.addEndpoint('button10', thirdpoint);        



        jsPlumb.makeTarget("item0", {
          anchor:"AutoDefault",
          endpoint:["Dot", { radius:4 }],   
          paintStyle:{ fill:"#EFEFEF", } 
        });
        jsPlumb.draggable("item0")

        jsPlumb.makeTarget("item1", {
          anchor:"AutoDefault",
          endpoint:["Dot", { radius:4 }],   
          paintStyle:{ fill:"#EFEFEF", } 
        });
        jsPlumb.draggable("item1")

        jsPlumb.makeTarget("item2", {
          anchor:"AutoDefault",
          endpoint:["Dot", { radius:4 }],   
          paintStyle:{ fill:"#EFEFEF", } 
        });
        jsPlumb.draggable("item2")

        jsPlumb.makeTarget("item3", {
          anchor:"AutoDefault",
          endpoint:["Dot", { radius:4 }],   
          paintStyle:{ fill:"#EFEFEF", } 
        });
        jsPlumb.draggable("item3")

        jsPlumb.makeTarget("item4", {
          anchor:"AutoDefault",
          endpoint:["Dot", { radius:4 }],   
          paintStyle:{ fill:"#EFEFEF", } 
        });
        jsPlumb.draggable("item4")


        jsPlumb.makeTarget("item5", {
          anchor:"AutoDefault",
          endpoint:["Dot", { radius:4 }],   
          paintStyle:{ fill:"#EFEFEF", } 
        });
        jsPlumb.draggable("item5")

        jsPlumb.makeTarget("item6", {
          anchor:"AutoDefault",
          endpoint:["Dot", { radius:4 }],   
          paintStyle:{ fill:"#EFEFEF", } 
        });
        jsPlumb.draggable("item6")

        jsPlumb.makeTarget("item7", {
          anchor:"AutoDefault",
          endpoint:["Dot", { radius:4 }],   
          paintStyle:{ fill:"#EFEFEF", } 
        });
        jsPlumb.draggable("item7")


        jsPlumb.makeTarget("item8", {
          anchor:"AutoDefault",
          endpoint:["Dot", { radius:4 }],   
          paintStyle:{ fill:"#EFEFEF", } 
        });
        jsPlumb.draggable("item8")


        jsPlumb.makeTarget("item8", {
          anchor:"AutoDefault",
          endpoint:["Dot", { radius:4 }],   
          paintStyle:{ fill:"#EFEFEF", } 
        });
        jsPlumb.draggable("item9")

        jsPlumb.makeTarget("item9", {
          anchor:"AutoDefault",
          endpoint:["Dot", { radius:4 }],   
          paintStyle:{ fill:"#EFEFEF", } 
        });
        jsPlumb.draggable("item10")

        jsPlumb.makeTarget("item10", {
          anchor:"AutoDefault",
          endpoint:["Dot", { radius:4 }],   
          paintStyle:{ fill:"#EFEFEF", } 
        });
        jsPlumb.draggable("item10")




        jsPlumb.makeTarget("button0", {
          anchor:"AutoDefault",
          endpoint:["Dot", { radius:4 }],   
          paintStyle:{ fill:"#EFEFEF", } 
        });
        jsPlumb.draggable("button0")


        jsPlumb.makeTarget("button1", {
          anchor:"AutoDefault",
          endpoint:["Dot", { radius:4 }],   
          paintStyle:{ fill:"#EFEFEF", } 
        });
        jsPlumb.draggable("button1")

        jsPlumb.makeTarget("button2", {
          anchor:"AutoDefault",
          endpoint:["Dot", { radius:4 }],   
          paintStyle:{ fill:"#EFEFEF", } 
        });
        jsPlumb.draggable("button2")

        jsPlumb.makeTarget("button3", {
          anchor:"AutoDefault",
          endpoint:["Dot", { radius:4 }],   
          paintStyle:{ fill:"#EFEFEF", } 
        });
        jsPlumb.draggable("button3")

        jsPlumb.makeTarget("button4", {
          anchor:"AutoDefault",
          endpoint:["Dot", { radius:4 }],   
          paintStyle:{ fill:"#EFEFEF", } 
        });
        jsPlumb.draggable("button4")


        jsPlumb.makeTarget("button5", {
          anchor:"AutoDefault",
          endpoint:["Dot", { radius:4 }],   
          paintStyle:{ fill:"#EFEFEF", } 
        });
        jsPlumb.draggable("button5")

        jsPlumb.makeTarget("button6", {
          anchor:"AutoDefault",
          endpoint:["Dot", { radius:4 }],   
          paintStyle:{ fill:"#EFEFEF", } 
        });
        jsPlumb.draggable("button6")

        jsPlumb.makeTarget("button7", {
          anchor:"AutoDefault",
          endpoint:["Dot", { radius:4 }],   
          paintStyle:{ fill:"#EFEFEF", } 
        });
        jsPlumb.draggable("button7")


        jsPlumb.makeTarget("button8", {
          anchor:"AutoDefault",
          endpoint:["Dot", { radius:4 }],   
          paintStyle:{ fill:"#EFEFEF", } 
        });
        jsPlumb.draggable("button8")


        jsPlumb.makeTarget("button9", {
          anchor:"AutoDefault",
          endpoint:["Dot", { radius:4 }],   
          paintStyle:{ fill:"#EFEFEF", } 
        });
        jsPlumb.draggable("button9")

        jsPlumb.makeTarget("button10", {
          anchor:"AutoDefault",
          endpoint:["Dot", { radius:4 }],   
          paintStyle:{ fill:"#EFEFEF", } 
        });
        jsPlumb.draggable("button10")



     
        jsPlumb.draggable("mainclass1")
        jsPlumb.draggable("mainclass2")
        jsPlumb.draggable("mainclass3")
        jsPlumb.draggable("mainclass4")
        jsPlumb.draggable("mainclass5")


})
})


