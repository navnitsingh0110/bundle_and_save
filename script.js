const bundleOptions = document.querySelectorAll(".bundle-option");
      const bundleRadios = document.querySelectorAll('input[name="bundle"]');
      const totalDisplay = document.getElementById("total");
      const prices = { 1: 18, 2: 32, 3: 42 };
      const variantContainers = {
        1: document.getElementById('variants1'),
        2: document.getElementById('variants2'),
        3: document.getElementById('variants3'),
      };

      bundleOptions.forEach(option => {
        option.addEventListener('click', () => {
          const bundleId = parseInt(option.dataset.bundleId);
          selectBundle(bundleId);
        });
      });

      bundleRadios.forEach((radio) => {
        radio.addEventListener('change', (event) => {
          const bundleId = parseInt(event.target.id.replace('bundle', ''));
          selectBundle(bundleId);
        });
      });

      function selectBundle(id) {
        bundleOptions.forEach((opt) => {
          const bundleId = parseInt(opt.dataset.bundleId);
          const varEl = variantContainers[bundleId];
          const radio = opt.querySelector('input[type="radio"]');
          if (bundleId === id) {
            opt.classList.add("selected");
            radio.checked = true;
            varEl.style.display = "block";
          } else {
            opt.classList.remove("selected");
            radio.checked = false;
            varEl.style.display = "none";
          }
        });
        totalDisplay.textContent = "$" + prices[id].toFixed(2) + " USD";
      }

      selectBundle(1);