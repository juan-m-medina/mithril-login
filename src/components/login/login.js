import m from "mithril";

let template = 
  m('div.container', [
    m('form.container', { action: '' }, [
      m('h1', 'Mithril Login Form'),
      m('div.mb-3', [
        m('label.form-label', { for: 'emailInput' }, 'Email Address'),
        m('input#emailInput.form-control', {
          type: 'email',
          name: '',
          'aria-describedBy': 'emailHelp'
        }),
        m('div#emailHelp.form-text', "Your email address won't be shared"),
      ]),
      m('div.mb-3', [
        m('label.form-label', { for: 'password' }, 'Password'),
        m('input#password.form-control', {
          type: 'password',
          name: '',
          'aria-describedBy': 'emailHelp'
        }),
        m('div#passwordHelp.form-text', "Please use a combination of lowercase, uppercase, numbers and symbols")
      ]),
      m('button.btn.btn-primary', {
        type: 'submit',
        onclick: function() { alert('You attempted to login'); }
      }, 'Login')
    ])
  ]);

export default {
  view: () => template
};