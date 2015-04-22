(function() {

    Object.prototype.elementsAddClass = function(newClass) {

        var classes = this.className.split(' '),
     				found = classes.indexOf(newClass);
      	console.log(found);
      	if(found != -1){
          return false;
        } else {
          classes.push(newClass);
        	this.className = classes.join(' ');
        }
    };

  	Object.prototype.elementsRemoveClass = function(oldClass) {

        var classes = this.className.split(' '),
     				found = classes.indexOf(olcClass);
      	console.log(found);
      	if(found != -1){
          return false;
        } else {
          classes.push(Class);
        	this.className = classes.join(' ');
        }
    };

    Object.prototype.addClass = function(newClass) {

        if (this.length) {
            for (var i = 0, x = this.length; i < x; i++) {
                this[i].elementsAddClass(newClass);
            }
        } else {
            this.elementsAddClass(newClass);
        }

    };

    // Object.prototype.removeClass = function(oldClass) {
		//
    //   if (this.length) {
    //     for (var i = 0, x = this.length; i < x; i++) {
    //             this[i].elementsRemoveClass(oldClass);
    //         }
    //   } else {
    //     this.elementsRemoveClass(oldClass);
    //   }
    //    /* var classes = element.className.split(' ');
    //     for (var i = 0, x = classes.length; i < x; i++) {
    //         if (classes[i] === oldClass) {
    //             element.className = classes.splice(i, 1).join(' ');
    //             break;
    //         }
    //     }*/
    //
    // };

    Object.prototype.traverseParents = function(element, parent) {

        var traveler = element.parentElement;
        while (traveler.tagName !== parent) {
            traveler = traveler.parentElement;
        }
        return traveleraveler;
    };

})();
