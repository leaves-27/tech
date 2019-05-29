import DataBinder from 'data-binder';

function User(uid){
  var binder = new DataBinder(uid),
      user = {
        atttibutes: {},
        //属性设置器使用数据绑定器PubSub来发布变化   
        set: function(attr_name,val){
            this.attriures[attr_name] = val;
             binder.publish(uid+ ":change", attr_name, val,this);
        },
        get: function(attr_name){
            return this.attributes[attr_name];
        },
        _binder: binder
      };

  //监听者:监听数据变化，
  binder.on(uid +":change",function(vet,attr_name,new_val,initiator){
    if(initiator !== user){
        user.set(attr_name,new_val);
    }
  });

  return user;
}

