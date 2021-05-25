(function() {
    // polyfill required for IE11
    if(window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = Array.prototype.forEach;
    }

    document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled');

    window.GOVUKFrontend.initAll();

    document.querySelectorAll('input[type="radio"], input[type="checkbox"], select').forEach(function(revealer) {
        // adds the event listener for clicks
        revealer.addEventListener('change', revealHiddenOptions);
        // reveals neccesary inputs on load
        if(revealer.checked && revealer.dataset.target) {
            document.getElementById(revealer.dataset.target).classList.remove('js-hidden');
        } else if(revealer.checked && revealer.dataset.hide) {
            document.getElementById(revealer.dataset.hide).classList.add('js-hidden');
        }
    });

    function revealHiddenOptions(e) {
        if(this.tagName === 'SELECT') {
            for(var i = 0; i < this.options.length; i++) {
                if(this.options[i].dataset.target) {
                    var el = document.getElementById(this.options[i].dataset.target);
                    if(!el.classList.contains('js-hidden')) {
                        el.classList.add('js-hidden');
                        clearHiddenDescendants(el);
                    }
                }
            }
            if(document.getElementById(this.options[this.selectedIndex].dataset.target)) {
                document.getElementById(this.options[this.selectedIndex].dataset.target).classList.remove('js-hidden');
            }
        }
        if(this.checked && this.dataset.target) {
            this.parentNode.parentNode.childNodes.forEach(function(child) {
                if(typeof child.classList !== 'undefined' && child.classList.contains('govuk-radios__item')) {
                    child.childNodes.forEach(function(grandchild) {
                        if(typeof grandchild.dataset !== 'undefined' && grandchild.dataset.target && !document.getElementById(grandchild.dataset.target).classList.contains('js-hidden')) {
                            document.getElementById(grandchild.dataset.target).classList.add('js-hidden');
                            clearHiddenDescendants(document.getElementById(grandchild.dataset.target));
                        }
                    });
                }
            });
            document.getElementById(this.dataset.target).classList.remove('js-hidden');
        } else {
            var allParents = this.parentNode.parentNode.childNodes;
            allParents.forEach(function(parent) {
                var allChildren = parent.childNodes;
                allChildren.forEach(function(child) {
                    if(child.dataset !== undefined) {
                        if(child.dataset.target !== undefined && !document.getElementById(child.dataset.target).classList.contains('js-hidden')) {
                            document.getElementById(child.dataset.target).classList.add('js-hidden');
                            clearHiddenDescendants(document.getElementById(child.dataset.target));
                        }
                    }
                });
            });
        }
    }

    function clearHiddenDescendants(element) {
        element.querySelectorAll('*').forEach(function(descendant) {
            if (descendant.tagName === 'BUTTON') {
                return;
            } else if(descendant.checked) {
                descendant.checked = false;
            } else if(descendant.selected) {
                descendant.selected = false;
                descendant.parentNode.selectedIndex = 0;
            } else if(descendant.value && descendant.tagName !== 'OPTION') {
                descendant.value = "";
            }
        });
    }

    document.querySelectorAll('.clickable-table-row').forEach(function(row) {
        row.addEventListener('click', selectLinkedElement);
    });

    function selectLinkedElement(e) {
        if(e.target.tagName !== 'A') {
            document.getElementById(e.target.dataset.click).click();
        }
    }

    function findAncestorWithClass (element, className) {
        while (!element.classList.contains(className)) {
            element = element.parentNode;
        }
        return element;
    }

    document.querySelectorAll('.govuk-error-summary__list a').forEach(function(element) {
        element.addEventListener('click', switchToErroredSection);
    });

    function switchToErroredSection(e) {
        var elementToFocus = document.getElementById(e.target.href.split('#')[1]);
        var formSectionToDisplay = findAncestorWithClass(elementToFocus, 'form-section-wrapper');
        document.querySelectorAll('.form-section-wrapper').forEach(function(element) {
            element.classList.add('js-hidden');
        });
        formSectionToDisplay.classList.remove('js-hidden');
    }

    if(document.getElementById('suspend-all')) {
        document.getElementById('suspend-all').addEventListener('click', function() {
            document.querySelectorAll('[id^="suspendCheckbox"]').forEach(function(element) {
                element.checked = document.getElementById('suspend-all').checked;
            });
        });
    }

    
}());


