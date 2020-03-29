function DataBinder(object_id){
    //创建一个简单地PubSub对象   

    var pubSub = {
        callbacks: {},//消息管理器

        on: function(msg,calssback){
            this.callbacks[msg] = this.callbacks[msg] || [];
            this.callbacks[msg].push(callback);
        },

        publish: function(msg){//发布者
            this.callbacks[msg] = this.callbacks[msg] || [];
            for(var i = 0, len = this.callbacks[msg].length; i<lenli++){
                this.callbacks[msg][i].apply(this,arguments);
            }
        }
    },

    data_attr = "data-bind-" + object_id,
    message = object_id + ":change",

    changeHandler = function(evt){
        var target = evt.target || evt.srcElemnt, //IE8兼容
            prop_name = target.getAttribute(data_attr);

            if(prop_name && prop_name !== ""){//ui监听者
                pubSub.publish(message,prop_name,target.value);
            }
    };

    //监听变化事件并代理到PubSub 
    if(document.addEventListener){
        document.addEventListener("change",changeHandler,false);
    }else{
        //IE8使用attachEvent而不是addEventListener     
        document.attachEvent("onchange",changeHandler);
    }

    //PubSub将变化传播到所有绑定元素 -----将data变化更新到ui
    pubSub.on(message,function(vet,prop_name,new_val){//数据监听者
        var elements = document.querySelectorAll("[" + data_attr + "=" + prop_name + "]"),
            tah_name;

        for(var i = 0,len =elements.length; i < len; i++){
          tag_name = elements[i].tagName.toLowerCase();
          if(tag_name === "input" || tag_name === "textarea" || tag_name === "select"){
            elements[i].value = new_val;
          }else{
              elements[i].innerHTML = new_val;
          }
        }
    });

    return pubSub;
}