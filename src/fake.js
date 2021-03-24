export const formConfig = {
  fields: {
    name: {
      label: 'Ваше имя',
      row: 1,
      value: 'Anton',
      // hint: 'as',
      // label: function (formGlobal, component) { return component._uid },
      onFocus(fb) {
        fb.fields.name = {
          label: 'new obj label',
          // row: 2,
          order: 1,
          value: 'Bamby',
          hint: 'new added hint'
        }
        fb.fields['login'].hint = 'works now too'


      }
    },
    login: {
      label: 'Ваш логин',
      row: 1,
      order: 1,
      // hint: ""
      // value: function (f, v) { return v._uid },
    },
    'e-mail': {
      label: 'E-mail',
      row: 2,
      type: 'email'
    }
  },
  methods: {
    onSubmit(formGlobal, component, values) {
      console.log(formGlobal);
      console.log(values);
    }
  },

  // buttons: [  // buttons NOT required
  //   {
  //     type: 'submit', // required IF buttons declared
  //     label: 'отправить', color: 'primary', class: 'customClassName' //not required
  //   },
  //   { type: 'reset', label: 'сбросить' },  // reset button not required
  //   { type: 'close', label: 'x' },    
  //   { type: 'clear', label: 'очистить' },  // not required
  // ],

  title: 'Dev title'
}


export const values = {
  n55eds: '200',
  mailo12: 'testo@validate'
}