class Form{
    constructer(){

    }
    display()
    {
         var title = createElement('h2')
         title.html("NeedForSpeed")
         title.position(130,0)

         var input = createInput("Name dalo")
         input.position(130,160)
         var button = createButton("khel lo")
         button.position(250,200)
 
         button.mousePressed(function(){
             input.hide()
             button.hide()
             var name = input.value()

             var greeting = createElement('h3')
             greeting.html("hello "+name)
             greeting.position(130,160)

            })
        }
}