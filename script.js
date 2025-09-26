//your JS code here. If required.
 const bands = [
      'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
      'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 
      'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
      'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
    ];

    // Function to remove leading articles
    function removeArticle(name) {
      return name.replace(/^(a |an |the )/i, '');
    }

    // Sort ignoring articles
    const sortedBands = bands.sort((a, b) => {
      const nameA = removeArticle(a).toLowerCase();
      const nameB = removeArticle(b).toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

    // Get the ul element
    const ul = document.getElementById('band');

    // Add sorted bands to the ul
    sortedBands.forEach(band => {
      const li = document.createElement('li');
      li.textContent = band;
      ul.appendChild(li);
    });
  