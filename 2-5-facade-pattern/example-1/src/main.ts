// ⭐

// Estas son algunas de las clases de un framework de conversión
// de video de un tercero. No controlamos ese código, por lo que
// no podemos simplificarlo.

class VideoFile {}
class OggCompressionCodec {}
class MPEG4CompressionCodec {}
class CodecFactory {}
class BitrateReader {}
class AudioMixer {}
// ...etc

// ------------------------------------------------------------------------------------------

// Creamos una clase fachada para esconder la complejidad del
// framework tras una interfaz simple. Es una solución de
// equilibrio entre funcionalidad y simplicidad.

class VideoConverter {

  public convert(filename: string, format: string): VideoFile {

    // Aquí se oculta la complejidad del framework de conversión
    const file = new VideoFile();

    // ...mucho código de conversión...

    // Aquí devolvemos el archivo convertido
    return file;
  }


}

// ------------------------------------------------------------------------------------------

// El código del cliente no tiene que depender de clases del
// framework. El cliente trabaja con la fachada.

class Aplication {
  main() {
    const converter = new VideoConverter();
    const mp4 = converter.convert('video.ogg', 'mp4');

    // El cliente no tiene que preocuparse por la complejidad
    // del framework de conversión.
  }
}