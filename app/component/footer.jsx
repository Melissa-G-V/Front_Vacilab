'use client'
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from 'public/page.module.css';

export default function Foo() {
return(
<div>
<div className={`${styles.footer} mt-4`}>
        <div className="container">		
            <div className="row text-center">						
                <div className="col-lg-12 col-sm-12 col-xs-12">
                    <div className={styles.footer_menu}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Parceria</a></li>
                            <li><a href="#">Contatos</a></li>
                        </ul>
                    </div>						
                    <div className={styles.footer_profile}>
                        <ul>
                            <li><a href="#"><i className="bi bi-github"></i></a></li>
                            <li><a href="#"><i className="bi bi-filetype-tsx"></i></a></li>
                            <li><a href="#"><i className="bi bi-body-text"></i></a></li>
                            <li><a href="#"><i className="bi bi-archive"></i></a></li>
                        </ul>
                    </div>						
                </div>			
            </div>			
        </div>
    </div>
</div>
)
}