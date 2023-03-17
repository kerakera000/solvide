<template>
    <header class="header">
        <nav class="header__nav">
            <h1 class="header__nav--title">Solvide</h1>
            <ul class="header__nav--list">
                <li class="header__nav--list--item">
                    <a class="header__nav--list--item--text" href="#">
                        SERVICE
                    </a>
                </li>
                <li class="header__nav--list--item">
                    <a class="header__nav--list--item--text" href="#">
                        ABOUT
                    </a>
                </li>
                <li class="header__nav--list--item">
                    <a class="header__nav--list--item--text" href="#">
                        Q&A
                    </a>
                </li>
                <li class="header__nav--list--item">
                    <a class="header__nav--list--item--text" href="#">
                        COMPANY
                    </a>
                </li>
            </ul>
            <div class="header__nav--contact-box">
                <a class="header__nav--contact-box--text" href="#">
                    ご依頼はこちら
                    <!-- 色べた塗 -->
                </a>
            </div>
        </nav>
	</header>
    <div class="header-navsp-cnt">
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>
    export default {
        name: 'HeaderComp',
    }
</script>