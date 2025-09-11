<template>
    <main>
        <div class="_4KoDHA">
            <div data-testid="menu-fragment" class="l3vAqg">
                <div class="_65lpxA">
                    <div class="ZRRuDw">
                        <div style="height: 100%; width: 100%;">
                            <div class="KYQZFA">
                                <HeaderRow />
                                <MadeForWoundedRow />
                                <IntuitiveRow />
                                <div class="row-divider"></div>
                                <OpenSourcedRow />
                                <div class="row-divider"></div>
                                <ValidatedRow />
                                <SchematicsRow />
                                <DownloadsRow />
                                <ContributersRow />
                                <GalleryRow />
                                <FooterRow />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import HeaderRow from './sections/HeaderRow.vue'
import MadeForWoundedRow from './sections/MadeForWoundedRow.vue'
import IntuitiveRow from './sections/IntuitiveRow.vue'
import OpenSourcedRow from './sections/OpenSourcedRow.vue'
import ValidatedRow from './sections/ValidatedRow.vue'
import ContributersRow from './sections/ContributersRow.vue'
import DownloadsRow from './sections/DownloadsRow.vue'
import GalleryRow from './sections/GalleryRow.vue'
import SchematicsRow from './sections/SchematicsRow.vue'
import FooterRow from './sections/FooterRow.vue'

export default {
    name: 'MainSplit',
    components: {
        HeaderRow,
        MadeForWoundedRow,
        IntuitiveRow,
        OpenSourcedRow,
        ValidatedRow,
        ContributersRow,
        DownloadsRow,
        GalleryRow,
        SchematicsRow,
        FooterRow
    }
}
</script>
