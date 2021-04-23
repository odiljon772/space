$(document).ready(function () {
    $("#phone").mask("+38(099) 999-99-99");

    $(".tarif__slider").owlCarousel({
        items: 5,
        margin: 20,
        responsiveClass: true,
        responsive: {
            320: {
                items: 1,
                margin: 10,
            },
            1200: {
                items: 5,
            }
        }
    });
    class tab {
        constructor(argument1) {
            $(argument1).find('.all').hide();
            $(argument1).find('.view').click(function () {
                $(argument1).find(this).next().slideToggle(500);
                $(argument1).find('.all').not($(this).next()).slideUp(300);
            })
        }
    }
    


    var wrappee = $('.support__price-container');
    for (let i of wrappee) {
        i = new tab(i)
    }
    /* ========================= */
    class Dropdown {
        constructor(selector, options) {
            this.$el = document.querySelector(selector)
            this.items = options.items

            this.$el.querySelector('.dropdown__label').textContent = this.items[0].label

            this.$el.addEventListener('click', event => {
                if (event.target.classList.contains('dropdown__label')) {
                    if (this.$el.classList.contains('open')) {
                        this.close()
                    } else {
                        this.open()
                    }
                } else if (event.target.tagName.toLowerCase() === 'li') {
                    this.select(event.target.dataset.id)
                }
            })

            const itemsHTML = this.items.map(i => {
                return `<li data-id="${i.id}">${i.label}</li>`
            }).join(' ')

            this.$el.querySelector('.dropdown__menu').insertAdjacentHTML('afterbegin', itemsHTML)
        }

        select(id) {
            const item = this.items.find(i => i.id === id)
            this.$el.querySelector('.dropdown__label').textContent = item.label
            this.close()
        }

        open() {
            this.$el.classList.add('open')
        }

        close() {
            this.$el.classList.remove('open')
        }
    }
    const dropdown_question = new Dropdown('#dropdown_question', {
        items: [{
                label: 'Lending page',
                id: 'msk'
            },
            {
                label: 'Санкт-Петербург',
                id: 'spb'
            },
            {
                label: 'Новосибирск',
                id: 'nsk'
            },
            {
                label: 'Краснодар',
                id: 'krdr'
            },
            {
                label: 'Ростов',
                id: 'rostov'
            }
        ]
    })
    $('.dropdown_question').on('click', function () {
        $('.dropdown_question .dropdown__label').addClass('active')
    })
    const dropdown = new Dropdown('#dropdown', {
        items: [{
                label: 'Lending page',
                id: 'msk'
            },
            {
                label: 'Санкт-Петербург',
                id: 'spb'
            },
            {
                label: 'Новосибирск',
                id: 'nsk'
            },
            {
                label: 'Краснодар',
                id: 'krdr'
            },
            {
                label: 'Ростов',
                id: 'rostov'
            }
        ]
    })
    const dropdown2 = new Dropdown('#dropdown2', {
        items: [{
                label: 'Базове SEO',
                id: 'msk'
            },
            {
                label: 'Санкт-Петербург',
                id: 'spb'
            },
            {
                label: 'Новосибирск',
                id: 'nsk'
            },
            {
                label: 'Краснодар',
                id: 'krdr'
            },
            {
                label: 'Ростов',
                id: 'rostov'
            }
        ]
    })
    const dropdown3 = new Dropdown('#dropdown3', {
        items: [{
                label: 'Дизайн логтипа',
                id: 'msk'
            },
            {
                label: 'Санкт-Петербург',
                id: 'spb'
            },
            {
                label: 'Новосибирск',
                id: 'nsk'
            },
            {
                label: 'Краснодар',
                id: 'krdr'
            },
            {
                label: 'Ростов',
                id: 'rostov'
            }
        ]
    })
    const dropdown21 = new Dropdown('#dropdown21', {
        items: [{
                label: 'Lending page',
                id: 'msk'
            },
            {
                label: 'Lending page',
                id: 'msk'
            },
            {
                label: 'Lending page',
                id: 'msk'
            },
            {
                label: 'Lending page',
                id: 'msk'
            },
            {
                label: 'Lending page',
                id: 'msk'
            }
        ]
    })
    const dropdown22 = new Dropdown('#dropdown22', {
        items: [{
                label: 'Базове SEO',
                id: 'msk'
            },
            {
                label: 'Санкт-Петербург',
                id: 'spb'
            },
            {
                label: 'Новосибирск',
                id: 'nsk'
            },
            {
                label: 'Краснодар',
                id: 'krdr'
            },
            {
                label: 'Ростов',
                id: 'rostov'
            }
        ]
    })
    const dropdown23 = new Dropdown('#dropdown23', {
        items: [{
                label: 'Дизайн логтипа',
                id: 'msk'
            },
            {
                label: 'Санкт-Петербург',
                id: 'spb'
            },
            {
                label: 'Новосибирск',
                id: 'nsk'
            },
            {
                label: 'Краснодар',
                id: 'krdr'
            },
            {
                label: 'Ростов',
                id: 'rostov'
            }
        ]
    })
    const dropdown31 = new Dropdown('#dropdown31', {
        items: [{
                label: 'Lending page',
                id: 'msk'
            },
            {
                label: 'Lending page',
                id: 'msk'
            },
            {
                label: 'Lending page',
                id: 'msk'
            },
            {
                label: 'Lending page',
                id: 'msk'
            },
            {
                label: 'Lending page',
                id: 'msk'
            }
        ]
    })
    const dropdown32 = new Dropdown('#dropdown32', {
        items: [{
                label: 'Базове SEO',
                id: 'msk'
            },
            {
                label: 'Санкт-Петербург',
                id: 'spb'
            },
            {
                label: 'Новосибирск',
                id: 'nsk'
            },
            {
                label: 'Краснодар',
                id: 'krdr'
            },
            {
                label: 'Ростов',
                id: 'rostov'
            }
        ]
    })
    const dropdown33 = new Dropdown('#dropdown33', {
        items: [{
                label: 'Дизайн логтипа',
                id: 'msk'
            },
            {
                label: 'Санкт-Петербург',
                id: 'spb'
            },
            {
                label: 'Новосибирск',
                id: 'nsk'
            },
            {
                label: 'Краснодар',
                id: 'krdr'
            },
            {
                label: 'Ростов',
                id: 'rostov'
            }
        ]
    })
    const dropdown41 = new Dropdown('#dropdown41', {
        items: [{
                label: 'Lending page',
                id: 'msk'
            },
            {
                label: 'Lending page',
                id: 'msk'
            },
            {
                label: 'Lending page',
                id: 'msk'
            },
            {
                label: 'Lending page',
                id: 'msk'
            },
            {
                label: 'Lending page',
                id: 'msk'
            }
        ]
    })
    const dropdown42 = new Dropdown('#dropdown42', {
        items: [{
                label: 'Базове SEO',
                id: 'msk'
            },
            {
                label: 'Санкт-Петербург',
                id: 'spb'
            },
            {
                label: 'Новосибирск',
                id: 'nsk'
            },
            {
                label: 'Краснодар',
                id: 'krdr'
            },
            {
                label: 'Ростов',
                id: 'rostov'
            }
        ]
    })
    const dropdown43 = new Dropdown('#dropdown43', {
        items: [{
                label: 'Дизайн логтипа',
                id: 'msk'
            },
            {
                label: 'Санкт-Петербург',
                id: 'spb'
            },
            {
                label: 'Новосибирск',
                id: 'nsk'
            },
            {
                label: 'Краснодар',
                id: 'krdr'
            },
            {
                label: 'Ростов',
                id: 'rostov'
            }
        ]
    })
    const dropdown51 = new Dropdown('#dropdown51', {
        items: [{
                label: 'Lending page',
                id: 'msk'
            },
            {
                label: 'Lending page',
                id: 'msk'
            },
            {
                label: 'Lending page',
                id: 'msk'
            },
            {
                label: 'Lending page',
                id: 'msk'
            },
            {
                label: 'Lending page',
                id: 'msk'
            }
        ]
    })
    const dropdown52 = new Dropdown('#dropdown52', {
        items: [{
                label: 'Базове SEO',
                id: 'msk'
            },
            {
                label: 'Санкт-Петербург',
                id: 'spb'
            },
            {
                label: 'Новосибирск',
                id: 'nsk'
            },
            {
                label: 'Краснодар',
                id: 'krdr'
            },
            {
                label: 'Ростов',
                id: 'rostov'
            }
        ]
    })
    const dropdown53 = new Dropdown('#dropdown53', {
        items: [{
                label: 'Дизайн логтипа',
                id: 'msk'
            },
            {
                label: 'Санкт-Петербург',
                id: 'spb'
            },
            {
                label: 'Новосибирск',
                id: 'nsk'
            },
            {
                label: 'Краснодар',
                id: 'krdr'
            },
            {
                label: 'Ростов',
                id: 'rostov'
            }
        ]
    })

});



if (window.matchMedia("(max-width: 991px)").matches) {
    $('.support__price').hover(function() {
        this.style.transform = 'translateY(0)';
    })
    $('.support__price').click(function (e) {
        if(e.target.classList.contains = 'views'){
            this.style.transform = 'translateY(0)'
        }
    })
    
    $('.support__price').mouseleave(function() {
        this.style.transform = 'translateY(0)';
    })
}else {
    $('.support__price').hover(function() {
        this.style.transform = 'translateY(-90px)';
    })
    $('.support__price').click(function (e) {
        if(e.target.classList.contains = 'views'){
            this.style.transform = 'translateY(-200px)'
        }
    })
    
    $('.support__price').mouseleave(function() {
        this.style.transform = 'translateY(0)';
    })
  }