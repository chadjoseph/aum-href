import dispatch from 'aum-dispatch';
import location from 'aum-location';

function href(e) {
  var currentTarget = e.currentTarget || this;

  if (e.ctrlKey || e.metaKey || e.which === 2) {
    return;
  }

  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }

  dispatch('route', currentTarget.search);
}

export default function (element) {
  element.href = location.pathname + '?' + this.attrs.href;

  element.removeEventListener('click', href);
  element.addEventListener('click', href);
}

