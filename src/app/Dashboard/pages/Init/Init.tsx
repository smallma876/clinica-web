import ButtonPrimary from '../../../../components/ButtonPrimary/ButtonPrimary'
import ButtonSecondary from '../../../../components/ButtonSecondary/ButtonSecondary'
import Card from '../../../../components/Card'
import styles from './init.module.css'

const Init = () => {
  return (
    <div className={styles.init}>
      <div className={styles.header}>
        <Card>
          <h2>Sergio Ruben, bienvenido a tu Clinica Online</h2>
          <p>
            En clinica online cuidamos de tu salud desde la comodida de tu
            hogar. Agenda citas y accede a tu historial de forma rapida y
            segura, todo en su lugar.
          </p>
          <ButtonPrimary>Agendar cita</ButtonPrimary>
        </Card>
      </div>
      <div className={styles.block1}>
        <Card>
          <h2>Consulta tus resultados</h2>
          <p>informate aqui sobre tus resultados de laboratorio.</p>
          <ButtonSecondary>Ver resultados</ButtonSecondary>
        </Card>
      </div>
      <div className={styles.block2}>
        <Card>
          <h2>Centro estetico</h2>
          <p>
            Conoce nuestro nuevo centro estetico en sede Surco y agenda una
            cita.
          </p>
          <ButtonSecondary>Agenda una cita</ButtonSecondary>
        </Card>
      </div>
      <div className={styles.block3}>
        <Card>
          <h2>Gestiona tus datos aqui</h2>
          <p>
            Actualiza tus datos de forma rapida y manten tu informacion siempre
            al dia.
          </p>
          <ButtonSecondary>Ir a mi perfil</ButtonSecondary>
        </Card>
      </div>
    </div>
  )
}

export default Init
