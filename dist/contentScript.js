function appendButton(temp) {
  const linker=temp;
  console.log(linker);
  const myProfileButton = document.querySelector('.js-profile-editable-edit-button');
  const othersProfileButton = document.querySelector('input.btn-block');
  if (myProfileButton) {
    const openSaucedButton = document.createElement('button');
    openSaucedButton.textContent = 'View on OpenSauced';
    openSaucedButton.classList.add('btn', 'btn-primary','btn-block', 'my-3');
    // openSaucedButton.classList.add('btn1','my-3');
    openSaucedButton.addEventListener('click', function() {
      window.location.href = `${linker}`;
    });
    myProfileButton.insertAdjacentElement('afterend', openSaucedButton);
  }
  else if(othersProfileButton)
  {
    const openSaucedButton = document.createElement('button');
    openSaucedButton.textContent = 'View on OpenSauced';
    openSaucedButton.classList.add('btn', 'btn-primary','btn-block', 'my-3');
    // openSaucedButton.classList.add('btn1','my-3');
    openSaucedButton.addEventListener('click', function() {
      window.location.href = `${linker}`;
    });
    othersProfileButton.insertAdjacentElement('afterend', openSaucedButton);    
  }
  else {
    console.log('Could not find "Edit Profile" button');
  }
}

function checkOpenSaucedProfile(username) {
  fetch(`https://api.opensauced.pizza/v1/users/${username}`)
    .then(response => {
      if (response.status === 200) {
        const temp=`https://insights.opensauced.pizza/user/${username}/contributions`;
        // The user has an OpenSauced profile, so add a button to the page
        appendButton(temp);
      }
    })
    .catch(error => console.error(error));
}


function open()
{
const url = window.location.href;
const match = url.match(/github\.com\/([^/]+)/);

if (match) {
  const username = match[1];
  checkOpenSaucedProfile(username);
}
}

open();