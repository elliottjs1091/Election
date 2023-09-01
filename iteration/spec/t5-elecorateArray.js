describe('Box of Toys', function() {
    var box
  
  
    beforeEach(function() {
      theBox = new Box()
    })
  
  
    describe('An empty box', function() {
      beforeEach(function() {
        theBox = new Box()
      })
      
      it('should have a .toyCount property', function() {
        expect(theBox.hasOwnProperty('toyCount')).toBeTruthy()
      })
  
      it('should have a toy count of 0', function() {
        const count = theBox.toyCount
        expect(count).toBe(0)
      })
      
      it('should have an .allMyToys property', function() {
        expect(theBox.hasOwnProperty('allMyToys')).toBeTruthy()
      })
      
      it('should have an array for the .allMyToys ', function() {
        expect(Array.isArray(theBox.allMyToys)).toBeTruthy()
      })
      
      it('should have nothing in the allMyToys array', function() {
        const arraySize = theBox.allMyToys.length 
        expect(arraySize).toBe(0)
      })
      
     it('should return a string saying it has 0 toys', function() {
        const output = theBox.toString()
        expect(output).toBe('This toybox has 0 toys<br>')
      })
  
    })
  
    describe('a box with 1 toy in it', function() {
      beforeEach(function() {
        theBox.addToy('Aardvark', 'Brown', 11.11)
      })
  
      it('should have a toy count of 1', function() {
        const count = theBox.toyCount
        expect(count).toBe(1)
      })
      
        it('should have one entry in the allMyToys array', function() {
          const arraySize = theBox.allMyToys.length 
          expect(arraySize).toBe(1)
        })
  
      it('should have a Toy in the allMyToys array', function() {
        const aToy = theBox.allMyToys[0] 
        expect(aToy instanceof Toy).toBeTruthy()
      })    
      
      describe('The Brown Arrdvark Toy worth 11.11 in the toy box', function() {
        var aToy
        beforeEach(function() {
          aToy = theBox.allMyToys[0] 
        })
        it('should have a .name property', function() {
          expect(aToy.hasOwnProperty('name')).toBeTruthy()
        })      
        it('should have a .colour property', function() {
          expect(aToy.hasOwnProperty('colour')).toBeTruthy()
        })       
        it('should have a .cost property', function() {
          expect(aToy.hasOwnProperty('cost')).toBeTruthy()
        })  
        it('should have a .name of "Aardvark"', function() {
          var theValue = aToy.name
          expect(theValue).toBe("Aardvark")
        })      
        it('should have a .colour of "Brown"', function() {
          var theValue = aToy.colour
          expect(theValue).toBe("Brown")
        })       
        it('should have a .cost of 11.11', function() {
          var theValue = aToy.cost
          expect(theValue).toBe(11.11)
        })   
       it('should return the correct String', function() {
          var theWords = aToy.toString()
          expect(theWords).toBe('Aardvark ( Brown ) @ $11.11')
        })  
        
      })
      
    })
  
    describe('a box with 3 toys in it', function() {
      beforeEach(function() {
        theBox.addToy('Dolly', 'Pink', 33.33)
        theBox.addToy('Aardvark', 'Brown', 11.11)
        theBox.addToy('Bat', 'Wooden', 22.22)
      })
  
      it('should have a toy count of 3', function() {
        const count = theBox.toyCount
        expect(count).toBe(3)
      })
      
      it('should have three entries in the allMyToys array', function() {
        const arraySize = theBox.allMyToys.length 
        expect(arraySize).toBe(3)
      })
  
      it('should return the right string', function() {
        const output = theBox.toString() 
        expect(output).toBe('This toybox has 3 toys<br>&nbsp;&nbsp;&nbsp;&nbsp;Aardvark ( Brown ) @ $11.11<br>&nbsp;&nbsp;&nbsp;&nbsp;Bat ( Wooden ) @ $22.22<br>&nbsp;&nbsp;&nbsp;&nbsp;Dolly ( Pink ) @ $33.33<br>')
      })
    })
  
  
  })
  