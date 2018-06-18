document.addEventListener('DOMContentLoaded', function() {
    var SAMPLE_LENGTH = 36;
    var STRING_LENGTH = 8;
    function randomString() {
        return Math.random()
            .toString(SAMPLE_LENGTH)
            .replace(/[^a-z]+/g, '')
            .substr(0, STRING_LENGTH - 1);
    }
    document.querySelector('#MyForm').addEventListener('submit', function(ev) {
        ev.preventDefault();
        ev.stopPropagation();
    });
    document.querySelectorAll('#MyForm button')[0].addEventListener('click', function(ev) {
        ev.preventDefault();
        document.querySelector('#MyForm ul').insertAdjacentHTML('beforeend', '<li>' + randomString() + '</li>');
    });
    document.querySelectorAll('#MyForm button')[1].addEventListener('click', function(ev) {
        ev.preventDefault();
        var nodes = document.querySelectorAll('#MyForm ul li');
        if(nodes.length > 0) {
            Array.prototype.slice.call(nodes).map(function(el) { // this converts nodes into an array in order to call map
              //first, nodes doesn't have a slice method, but Array does
              //.call is an accessor function for functions
                el.parentNode.removeChild(el); // to remove an element in the DOM, you have to find the parent and tell it to remove the child
            })
        }
    });
})
