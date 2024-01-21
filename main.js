document.addEventListener('DOMContentLoaded', function () {
    // ... (código existente)

    // Manejar el evento del botón para agregar álbumes
    addAlbumButton.addEventListener('click', function () {
        const albumName = albumNameInput.value.trim();

        if (albumName !== '') {
            // Agregar álbum a la lista
            albums.push(albumName);

            // Actualizar gráfico y lista
            updateChart();
            updateAlbumList();

            // Limpiar el campo de entrada
            albumNameInput.value = '';

            // Mostrar alerta de éxito con SweetAlert2
            Swal.fire({
                icon: 'success',
                title: 'Álbum Agregado',
                text: `Se agregó el álbum "${albumName}" con éxito.`,
            });
        } else {
            // Mostrar alerta de error con SweetAlert2
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, ingresa un nombre válido para el álbum.',
            });
        }
    });
});
