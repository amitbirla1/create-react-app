this section will be use to manage the models of data for better communication.
for eg. you want to send some request to ameyo-sdk-client.
instead of creating a json.
create a class. and convert it to json.
```
class Data{
    constructor(id,context){
        super();
        this.id=id;
        this.context=context;
    }

    getId(){
        return this.id;
    }

    getContext(){
        return this.context;
    }

    toString(){
        return JSON.stringify(this);
    }
}
```